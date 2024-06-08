Udah bisa kalo aku coba di postman
output:
{
    "message": "Coping recommendations retrieved successfully",
    "recommendations": {
        "text_affirmation_first": "Stay balanced2.",
        "text_affirmation_last": "n3utr4l is good.",
        "text_instruction": "Embrace n3utr4lity 2.",
        "urls": {
            "music": "http://example.com/n3utr4l_music2",
            "podcast": "http://example.com/n3utr4l_pod"
        }
    }
}

-aku dah sesuaiin model, migrasi, sama nambahin data dummy di folder seeders buat testing

npx sequelize-cli db:seed --seed 20240608052921-mood-copings.js
npx sequelize-cli db:seed --seed 20240608051306-seed-coping-types.js
npx sequelize-cli db:seed --seed 20240607183503-seed-coping-tools.js

ERD:
https://lucid.app/lucidchart/2e7f90ff-782e-49bd-8f7a-cc36b5016108/edit?invitationId=inv_6e0617a8-4873-46ee-9135-86b7394728da&page=qQkJRDF.4LxD#
