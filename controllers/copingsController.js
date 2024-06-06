//controller/copingsController.js

const models = require('../models');

async function getCopingRecommendations(req, res) {
    try {
        // Ambil mood terbaru dari tabel mood_log untuk user tertentu
        const latestMood = await models.Mood_Log.findOne({
            where: { journal_id: req.params.journal_id },
            order: [['createdAt', 'DESC']],
            attributes: ['mood']
        });

        // Jika mood terdeteksi
        if (latestMood) {
            // Tambahkan entri baru ke mood_copings jika belum ada
            const [moodCoping, created] = await models.Mood_Copings.findOrCreate({
                where: { mood_log_id: latestMood.id },
                defaults: { coping_tool_id: 1 } // Tentukan coping_tool_id sesuai dengan logika Anda
            });

            // Ambil rekomendasi alat penanganan berdasarkan id alat penanganan
            const copingRecommendations = await models.Coping_Tools.findAll({
                where: { id: moodCoping.coping_tool_id },
                attributes: ['coping_tool_name', 'content_url']
            });

            // Pastikan jumlah rekomendasi sesuai dengan yang diharapkan
            if (copingRecommendations.length >= 3) {
                return res.status(200).json({
                    message: "Coping recommendations retrieved successfully",
                    mood: latestMood.mood,
                    recommendations: copingRecommendations.slice(0, 3) // Ambil maksimal 3 rekomendasi
                });
            } else {
                return res.status(404).json({
                    message: "Insufficient coping recommendations available for this mood"
                });
            }
        } else {
            return res.status(404).json({
                message: "No mood detected for this journal entry"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    }
}
async function addMoodLogEntry(req, res) {
    try {
        const { journal_id, mood } = req.body;

        // Pastikan data yang diterima valid
        if (!journal_id || !mood) {
            return res.status(400).json({ message: "Journal ID and mood are required" });
        }

        // Tambahkan entri baru ke tabel mood_logs
        const newMoodLog = await models.Mood_Log.create({
            mood_log_id: mood_logs_id,
            journal_id: journal_id,
            mood: mood
        });

        // Jika berhasil menambahkan entri mood_log, kembalikan respons sukses
        return res.status(201).json({
            message: "Mood log entry added successfully",
            moodLog: newMoodLog
        });
    } catch (error) {
        // Tangani kesalahan jika terjadi
        return res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    }
}

module.exports = {
    getCopingRecommendations:getCopingRecommendations, addMoodLogEntry:addMoodLogEntry
};
