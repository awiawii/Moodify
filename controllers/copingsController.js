const { Mood_Log, Mood_Coping, Coping_Type, Coping_Tool, User_Info, Journal } = require('../models');
const { Op } = require('sequelize');

// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

exports.getCopingRecommendations = async (req, res) => {
    const userId = req.user.uid; // Assumes req.user contains authenticated user information
    const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
    console.log(`Received request for user_id: ${userId} on date: ${currentDate}`);

    try {
        // Step 1: Fetch the latest mood log for the user based on today's date
        const userJournal = await User_Info.findOne({
            where: { uid: userId },
            include: [{
                model: Journal,
                as: 'Journal',
                where: {
                    createdAt: { [Op.between]: [`${currentDate} 00:00:00`, `${currentDate} 23:59:59`] }
                },
                include: [{
                    model: Mood_Log,
                    as: 'Mood',
                    where: {
                        createdAt: { [Op.between]: [`${currentDate} 00:00:00`, `${currentDate} 23:59:59`] }
                    },
                    order: [['createdAt', 'DESC']]
                }]
            }]
        });

        if (!userJournal || !userJournal.Journal.length || !userJournal.Journal[0].Mood.length) {
            return res.status(404).json({ message: "No mood logs found for the user today" });
        }

        const latestMood = userJournal.Journal[0].Mood[0].mood;
        console.log(`Latest mood: ${latestMood}`);

        // Step 2: Get the mood_coping_id based on the latest mood
        const moodCoping = await Mood_Coping.findOne({
            attributes: ['mood_coping_id'],
            where: { mood_type: latestMood }
        });

        if (!moodCoping) {
            return res.status(404).json({ message: "No mood coping found for this mood type" });
        }

        const moodCopingId = moodCoping.mood_coping_id;
        console.log(`Mood coping ID: ${moodCopingId}`);

        // Step 3: Get the coping_type_id based on the mood_coping_id
        const copingTypes = await Coping_Type.findAll({
            attributes: ['coping_type_id', 'coping_type_name'],
            where: { mood_coping_id: moodCopingId }
        });

        if (!copingTypes.length) {
            return res.status(404).json({ message: "No coping types found for this mood coping ID" });
        }

        const copingTypeIds = copingTypes.map(type => type.coping_type_id);
        console.log(`Coping type IDs: ${copingTypeIds.join(', ')}`);

        // Step 4: Get coping tools based on the coping_type_id
        let copingTools = await Coping_Tool.findAll({
            attributes: ['coping_tool_name', 'text', 'content_url', 'coping_type_id'],
            where: { coping_type_id: copingTypeIds }
        });

        console.log(`Coping tools found: ${copingTools.length}`);

        // Categorize coping tools based on coping_type_name
        let recommendations = {
            text_affirmation_first: [],
            text_affirmation_last: [],
            text_instruction: [],
            urls: {
                music: [],
                podcast: []
            }
        };

        copingTools.forEach(tool => {
            const type = copingTypes.find(ct => ct.coping_type_id === tool.coping_type_id).coping_type_name;
            if (type === 'text_affirmation_first') {
                recommendations.text_affirmation_first.push(tool.text);
            } else if (type === 'text_affirmation_last') {
                recommendations.text_affirmation_last.push(tool.text);
            } else if (type === 'text_instruction') {
                recommendations.text_instruction.push(tool.text);
            }
            if (tool.content_url) {
                if (tool.coping_tool_name.toLowerCase().includes('music')) {
                    recommendations.urls.music.push(tool.content_url);
                } else if (tool.coping_tool_name.toLowerCase().includes('podcast')) {
                    recommendations.urls.podcast.push(tool.content_url);
                }
            }
        });

        // Shuffle arrays with recommendations
        shuffle(recommendations.text_affirmation_first);
        shuffle(recommendations.text_affirmation_last);
        shuffle(recommendations.text_instruction);
        shuffle(recommendations.urls.music);
        shuffle(recommendations.urls.podcast);

        // Rotate arrays to change recommendations each time
        recommendations.text_affirmation_first.push(recommendations.text_affirmation_first.shift());
        recommendations.text_affirmation_last.push(recommendations.text_affirmation_last.shift());
        recommendations.text_instruction.push(recommendations.text_instruction.shift());
        recommendations.urls.music.push(recommendations.urls.music.shift());
        recommendations.urls.podcast.push(recommendations.urls.podcast.shift());

        // Pick the first item for each text type
        let finalRecommendations = {
            text_affirmation_first: recommendations.text_affirmation_first[0] || "",
            text_affirmation_last: recommendations.text_affirmation_last[0] || "",
            text_instruction: recommendations.text_instruction[0] || "",
            urls: {
                music: recommendations.urls.music[0] || "",
                podcast: recommendations.urls.podcast[0] || ""
            }
        };

        console.log(`Final response: ${JSON.stringify(finalRecommendations)}`);
        res.status(200).json({
            message: "Coping recommendations retrieved successfully",
            recommendations: finalRecommendations
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error retrieving coping recommendations" });
    }
};
