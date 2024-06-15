const { Mood_Coping, Coping_Type, Coping_Tool } = require('../models');


const getMoodCopingDataMeditation = async (req, res) => {
    try {
        // Step 1: Get all mood_coping_ids
        const moodCopingList = await Mood_Coping.findAll({
            attributes: ['mood_coping_id']
        });

        if (!moodCopingList.length) {
            return res.status(404).json({ message: "No mood coping found" });
        }

        // Step 2: Define mood types based on mood_coping_id
        const mood_types = {
            1: 'anger',
            2: 'fear',
            3: 'happy',
            4: 'joy',
            5: 'love',
            6: 'sadness',
            7: 'neutral'
        };

        // Step 3: Iterate through each mood_coping_id to get coping types and tools
        let recommendations = {};

        for (let i = 0; i < moodCopingList.length; i++) {
            const moodCopingId = moodCopingList[i].mood_coping_id;
            const moodType = mood_types[moodCopingId]; // Get the corresponding mood_type

            console.log(`Mood coping ID: ${moodCopingId}`);

            // Get coping types for this mood coping ID
            const copingTypes = await Coping_Type.findAll({
                attributes: ['coping_type_id', 'coping_type_name'],
                where: { mood_coping_id: moodCopingId }
            });

            if (!copingTypes.length) {
                continue; // Skip if no coping types found for this mood coping ID
            }

            const copingTypeIds = copingTypes.map(type => type.coping_type_id);
            console.log(`Coping type IDs: ${copingTypeIds.join(', ')}`);

            // Get coping tools based on the coping_type_ids
            let copingTools = await Coping_Tool.findAll({
                attributes: ['coping_tool_name', 'text', 'content_url', 'coping_type_id'],
                where: { coping_type_id: copingTypeIds }
            });

            console.log(`Coping tools found: ${copingTools.length}`);

            // Categorize coping tools based on coping_type_name for this mood coping ID
            recommendations[moodType] = {
                text_instruction: []
            };

            copingTools.forEach(tool => {
                const type = copingTypes.find(ct => ct.coping_type_id === tool.coping_type_id).coping_type_name;
                if (type === 'text_instruction') {
                    recommendations[moodType].text_instruction.push(tool.text);
                }
            });
        }

        // Send recommendations as response
        res.status(200).json({ recommendations });

    } catch (error) {
        console.error("Error in getMoodCopingDataMeditation:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const getMoodCopingDataMusic = async (req, res) => {
    try {
        // Step 1: Get all mood_coping_ids
        const moodCopingList = await Mood_Coping.findAll({
            attributes: ['mood_coping_id']
        });

        if (!moodCopingList.length) {
            return res.status(404).json({ message: "No mood coping found" });
        }

        // Step 2: Define mood types based on mood_coping_id
        const mood_types = {
            1: 'anger',
            2: 'fear',
            3: 'happy',
            4: 'joy',
            5: 'love',
            6: 'sadness',
            7: 'neutral'
        };

        // Step 3: Iterate through each mood_coping_id to get coping types and tools
        let recommendations = {};

        for (let i = 0; i < moodCopingList.length; i++) {
            const moodCopingId = moodCopingList[i].mood_coping_id;
            const moodType = mood_types[moodCopingId]; // Get the corresponding mood_type

            console.log(`Mood coping ID: ${moodCopingId}`);

            // Get coping types for this mood coping ID
            const copingTypes = await Coping_Type.findAll({
                attributes: ['coping_type_id', 'coping_type_name'],
                where: { mood_coping_id: moodCopingId }
            });

            if (!copingTypes.length) {
                continue; // Skip if no coping types found for this mood coping ID
            }

            const copingTypeIds = copingTypes.map(type => type.coping_type_id);
            console.log(`Coping type IDs: ${copingTypeIds.join(', ')}`);

            // Get coping tools based on the coping_type_ids
            let copingTools = await Coping_Tool.findAll({
                attributes: ['coping_tool_name', 'text', 'content_url', 'coping_type_id'],
                where: { coping_type_id: copingTypeIds }
            });

            console.log(`Coping tools found: ${copingTools.length}`);

            // Categorize coping tools based on coping_type_name for this mood coping ID
            recommendations[moodType] = {
                text_affirmation_first: [],
                text_affirmation_last: [],
                music: []
            };

            copingTools.forEach(tool => {
                const type = copingTypes.find(ct => ct.coping_type_id === tool.coping_type_id).coping_type_name;
                if (type === 'text_affirmation_first') {
                    recommendations[moodType].text_affirmation_first.push(tool.text);
                } else if (type === 'text_affirmation_last') {
                    recommendations[moodType].text_affirmation_last.push(tool.text);
                }
                if (tool.content_url && tool.coping_tool_name.toLowerCase().includes('music')) {
                    recommendations[moodType].music.push(tool.content_url);
                }
            });
        }

        // Send recommendations as response
        res.status(200).json({ recommendations });

    } catch (error) {
        console.error("Error in getMoodCopingDataMusic:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const getMoodCopingDataPodcast = async (req, res) => {
    try {
        // Step 1: Get all mood_coping_ids
        const moodCopingList = await Mood_Coping.findAll({
            attributes: ['mood_coping_id']
        });

        if (!moodCopingList.length) {
            return res.status(404).json({ message: "No mood coping found" });
        }

        // Step 2: Define mood types based on mood_coping_id
        const mood_types = {
            1: 'anger',
            2: 'fear',
            3: 'happy',
            4: 'joy',
            5: 'love',
            6: 'sadness',
            7: 'neutral'
        };

        // Step 3: Iterate through each mood_coping_id to get coping types and tools
        let recommendations = {};

        for (let i = 0; i < moodCopingList.length; i++) {
            const moodCopingId = moodCopingList[i].mood_coping_id;
            const moodType = mood_types[moodCopingId]; // Get the corresponding mood_type

            console.log(`Mood coping ID: ${moodCopingId}`);

            // Get coping types for this mood coping ID
            const copingTypes = await Coping_Type.findAll({
                attributes: ['coping_type_id', 'coping_type_name'],
                where: { mood_coping_id: moodCopingId }
            });

            if (!copingTypes.length) {
                continue; // Skip if no coping types found for this mood coping ID
            }

            const copingTypeIds = copingTypes.map(type => type.coping_type_id);
            console.log(`Coping type IDs: ${copingTypeIds.join(', ')}`);

            // Get coping tools based on the coping_type_ids
            let copingTools = await Coping_Tool.findAll({
                attributes: ['coping_tool_name', 'text', 'content_url', 'coping_type_id'],
                where: { coping_type_id: copingTypeIds }
            });

            console.log(`Coping tools found: ${copingTools.length}`);

            // Categorize coping tools based on coping_type_name for this mood coping ID
            recommendations[moodType] = {
                text_affirmation_first: [],
                text_affirmation_last: [],
                podcast: []
            };

            copingTools.forEach(tool => {
                const type = copingTypes.find(ct => ct.coping_type_id === tool.coping_type_id).coping_type_name;
                if (type === 'text_affirmation_first') {
                    recommendations[moodType].text_affirmation_first.push(tool.text);
                } else if (type === 'text_affirmation_last') {
                    recommendations[moodType].text_affirmation_last.push(tool.text);
                }
                if (tool.content_url && tool.coping_tool_name.toLowerCase().includes('podcast')) {
                    recommendations[moodType].podcast.push(tool.content_url);
                }
            });
        }

        // Send recommendations as response
        res.status(200).json({ recommendations });

    } catch (error) {
        console.error("Error in getMoodCopingDataPodcast:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


module.exports = {
    getMoodCopingDataMeditation, getMoodCopingDataMusic, getMoodCopingDataPodcast
};
