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
      const uploadDir = 'uploads/profile-pictures/';
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
      cb(null, Date.now() + path.extname(file.originalname)); 
    }
  });
  
  const upload = multer({ storage: storage });

// Menambahkan data diri pengguna (hanya JSON)
exports.addProfile = async (req, res) => {
  try {
      const { gender, birthday, country, phone_number } = req.body;
      const uid = req.user.uid;

      // Check if the UID exists in Firebase Authentication
      const userRecord = await admin.auth().getUser(uid);

      if (!userRecord) {
          return res.status(404).json({
              code: 404,
              status: 'Not Found',
              error: 'Pengguna dengan UID yang ditentukan tidak ditemukan di Firebase Authentication'
          });
      }

      // Check if the user's profile already exists in the database
      let profile = await models.User_Info.findOne({ where: { uid } });

      if (profile) {
          // If the profile exists, update it
          profile.gender = gender;
          profile.birthday = birthday;
          profile.country = country;
          profile.phone_number = phone_number;
          await profile.save();

          return res.status(200).json({
              message: 'Profil berhasil diperbarui'
          });
      } else {
          // If the profile does not exist, create a new profile
          await models.User_Info.create({
              uid,
              gender,
              birthday,
              country,
              phone_number,
              profile_picture: null // Initially, no profile picture
          });

          return res.status(200).json({
              message: 'Profil berhasil ditambahkan'
          });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({
          error: 'Gagal menambahkan atau memperbarui profil'
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


exports.getProfile = async (req, res) => {
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

exports.getAllProfiles = async (req, res) => {
  try {
      const journal = await models.Journal.findAll();
      return res.status(200).json({
        journal:journal
    });
  } catch (error) {
      console.error(error);
      res.status(500).json({
          error: 'Gagal mengambil data profil'
      });
  }
};
