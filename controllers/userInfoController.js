//controllers/userInfoController.js

const Sequelize = require('sequelize');
const models = require('../models');
const admin = require('../config/firebaseAdmin');
const multer = require('multer');
const path = require('path');
const mkdirp = require('mkdirp');

// Konfigurasi multer untuk unggah foto profil
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const uploadDir = 'uploads/profile_pictures/';
      mkdirp(uploadDir, function (err) {
        if (err) {
          console.error(err);
          cb(err, null);
        } else {
          cb(null, uploadDir);
        }
      });
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)); // Menambahkan ekstensi file
    }
  });
  
  const upload = multer({ storage: storage });

// Menambahkan data diri pengguna (hanya JSON)
exports.addProfile = async (req, res) => {
    try {
        const { name, gender, birthday, country, phone_number } = req.body;
        const uid = req.user.uid;

        // Periksa apakah UID sudah ada di Firebase Authentication
        const userRecord = await admin.auth().getUser(uid);

        if (!userRecord) {
            return res.status(404).json({
                code: 404,
                status: 'Not Found',
                error: 'Pengguna dengan UID yang ditentukan tidak ditemukan di Firebase Authentication'
            });
        }

        // Tambahkan data diri pengguna ke database
        await models.User_Info.create({
            uid,
            name,
            gender,
            birthday,
            country,
            phone_number,
            profile_picture: null // Awalnya, nggak ada foto profil
        });

        res.status(200).json({
            message: 'Profil berhasil ditambahkan'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Gagal menambahkan profil'
        });
    }
};

// Mengubah data diri pengguna (hanya JSON)
exports.updateProfile = async (req, res) => {
    try {
        const { name, gender, birthday, country, phone_number } = req.body;
        const uid = req.user.uid;

        // Periksa apakah pengguna sudah ada di database
        let profile = await models.User_Info.findOne({ where: { uid } });

        if (!profile) {
            return res.status(404).json({
                code: 404,
                status: 'Not Found',
                error: 'Profil pengguna tidak ditemukan di database'
            });
        }

        // Perbarui data diri pengguna
        profile.name = name;
        profile.gender = gender;
        profile.birthday = birthday;
        profile.country = country;
        profile.phone_number = phone_number;
        await profile.save();

        res.status(200).json({
            message: 'Profil berhasil diperbarui'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Gagal memperbarui profil'
        });
    }
};

// Mengunggah foto profil (hanya form-data)
exports.uploadProfilePicture = [
    upload.single('profile_picture'),
    async (req, res) => {
      try {
        const uid = req.user.uid;
        const fileName = req.file.filename; // Mengambil nama file yang diunggah
  
        let profile = await models.User_Info.findOne({ where: { uid } });
  
        if (!profile) {
          return res.status(404).json({
            code: 404,
            status: 'Not Found',
            error: 'Profil pengguna tidak ditemukan di database'
          });
        }
  
        profile.profile_picture = fileName; // Simpan nama file di kolom profile_picture
        await profile.save();
  
        res.status(200).json({
          message: 'Foto profil berhasil diunggah'
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          error: 'Gagal mengunggah foto profil'
        });
      }
    }
  ];

// Mendapatkan semua data pengguna
exports.getAllProfiles = async (req, res) => {
    try {
        const profiles = await models.User_Info.findOne({where:{uid:req.user.uid}});
        res.status(200).json(profiles);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Gagal mengambil data profil'
        });
    }
};

