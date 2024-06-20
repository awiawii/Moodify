
# Moodify Cloud Computing

## Modify Backend Services
![Cloud Computing](https://github.com/mbprayoga/moodify/assets/76588831/feb59a58-5094-4746-9542-80b6adfa6249)


## Setup and Instalation
### Node.js
- install all dependencies `npm install`
- Setup configuration for database and port
- Run the project`node run server.js`

### Deployment
- Dockerfile
```bash
# Base image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Download and install Cloud SQL Auth proxy
RUN curl -o /usr/local/bin/cloud_sql_proxy https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.11.3/cloud-sql-proxy.linux.amd64 \
    && chmod +x /usr/local/bin/cloud_sql_proxy

# Set environment variables
ENV PORT 8080
ENV API_KEY=<api_key>
ENV AUTH_DOMAIN=<your.firebaseapp.com>
ENV PROJECT_ID=<your_project_id
ENV STORAGE_BUCKET=<your_storage_bucket>
ENV MESSAGING_SENDERID=<your_messaging_sender_id>
ENV APP_ID=<your_app_id>

# Expose port 8080
EXPOSE 8080

# Start the Cloud SQL Auth proxy and then your Node.js application
CMD ["sh", "-c", "/usr/local/bin/cloud_sql_proxy --address 0.0.0.0 --port 1234 <your_sql_connection> & npm start"]
```

- CloudBuild.yaml
```bash
steps:
# Step 1: Build the Docker image
- name: 'gcr.io/cloud-builders/docker'
  args: ['build', '-t', 'gcr.io/$PROJECT_ID/moodify', '.']

# Step 2: Push the Docker image to Google Container Registry
- name: 'gcr.io/cloud-builders/docker'
  args: ['push', 'gcr.io/$PROJECT_ID/moodify']

# Step 3: Deploy to Cloud Run
- name: 'gcr.io/cloud-builders/gcloud'
  args:
  - 'run'
  - 'deploy'
  - 'moodify'
  - '--image=gcr.io/$PROJECT_ID/moodify'
  - '--platform=managed'
  - '--region=asia-southeast2'
  - '--allow-unauthenticated'
```

## Testing in Postman
### Endpoint
#### local `http://localhost:3000`
##### Production `https://moodify-r25es5rdqq-et.a.run.app`
#### To test locally, just replace it with the local url
#### ⚠️Don't forget to `use access token in each test session`. access token will generated in your `login` . Use in the `Authorization` tab -> `Auth Type` -> `Bearer Token` -> fill your access token
### 

### Auth
###### `POST` Login
- URL `https://moodify-r25es5rdqq-et.a.run.app/auth/login`
- Request 
```bash
{
    "email": "youremail@gmail.com",
    "password": "yourpassword"
}
```
- Response
```bash
{
    "message": "Login successful",
    "user": {
        "uid": "youruid",
        "email": "youremail@gmail.com",
        "emailVerified": true,
        "isAnonymous": false,
        "providerData": [
            {
                "providerId": "password",
                "uid": "youremail@gmail.com",
                "displayName": null,
                "email": "youremail@gmail.com",
                "phoneNumber": null,
                "photoURL": null
            }
        ],
        "stsTokenManager": {
            "refreshToken": "yourtoken",
            "accessToken": "yourtoken",
            "expirationTime": 1718874027512
        },
        "createdAt": "1718208344407",
        "lastLoginAt": "1718870427345",
        "apiKey": "yours",
        "appName": "[DEFAULT]"
    }
}
```
###### `POST` Register
- URL `https://moodify-r25es5rdqq-et.a.run.app/auth/register`
- Request 
```bash
{
    "name":"Yourname",
    "email": "youremail@gmail.com",
    "password": "yourpassword"
}
```
- Response
```bash
{
    "message": "Email Verification sent!",
    "user": {
        "user": {
            "uid": "youruid",
            "email": "nurgundul1@gmail.com",
            "emailVerified": false,
            "isAnonymous": false,
            "providerData": [
                {
                    "providerId": "password",
                    "uid": "youremail@gmail.com",
                    "displayName": null,
                    "email": "youremail@gmail.com",
                    "phoneNumber": null,
                    "photoURL": null
                }
            ],
            "stsTokenManager": {
                "refreshToken": "zzz",
                "accessToken": "zzzz",
                "expirationTime": 1718874267474
            },
            "createdAt": "1718870667204",
            "lastLoginAt": "1718870667204",
            "apiKey": "yours",
            "appName": "[DEFAULT]"
        },
        "user_info": {
            "uid": "youruid",
            "name": "yourname",
            "updatedAt": "2024-06-20T08:04:28.255Z",
            "createdAt": "2024-06-20T08:04:28.255Z"
        }
    }
}
```
###### `POST` Sign in with google
- URL `https://moodify-r25es5rdqq-et.a.run.app/auth/login/google`
- Request 
```bash
{
  "idtoken": "yourtokenid"
}
```
- Response
```bash
{
    "message": "Google Sign-In successful",
    "user": {
        "uid": "UID",
        "email": "youremail@gmail.com",
        "emailVerified": true,
        "disabled": false,
        "metadata": {
            "lastSignInTime": null,
            "creationTime": "Thu, 20 Jun 2024 08:10:42 GMT",
            "lastRefreshTime": null
        },
        "tokensValidAfterTime": "Thu, 20 Jun 2024 08:10:42 GMT",
        "providerData": []
    },
    "stsTokenManager": {
        "refreshToken": "yourtoken",
        "accessToken": "yourtoken",
        "expirationTime": 1718874683800
    }
}
```



### User Info
##### `PUT` Update User Info
- URL `https://moodify-r25es5rdqq-et.a.run.app/user/profile`
- Request 
```bash
{
    "name": "yourname",
    "gender": "Male",
    "birthday": "1990-01-01",
    "country": "United States",
    "phone_number": "1234567890"
}

```
- Response
```bash
{
    "message": "Profil berhasil diperbarui"
}
```
##### `GET` User Info 
- URL `https://moodify-r25es5rdqq-et.a.run.app/user/profile`
- Response
```bash
{
    "uid": "youruid",
    "name": "yourname",
    "gender": "Male",
    "birthday": "1990-01-01T00:00:00.000Z",
    "country": "United States",
    "phone_number": "1234567890",
    "profile_picture": null,
    "createdAt": "2024-06-14T14:21:12.000Z",
    "updatedAt": "2024-06-20T08:13:37.000Z"
}
```

### Journal
##### `ADD` Add Journal
- URL `https://moodify-r25es5rdqq-et.a.run.app/tool/journal`
- Request 
```bash
{
    "journal_title":"your journal title",
    "journal_text":"your description about your journal",
    "mood":"(automatically) your mood based on detected mood by machine learning"
}

```
- Response
```bash
{
    "message": "Journal created successfully",
    "result": {
        "journal": {
            "journal_id": "yourjournalid",
            "journal_title": "your journal title",
            "journal_text": "your description about your journal",
            "uid": "yourUID",
            "updatedAt": "2024-06-20T08:17:02.124Z",
            "createdAt": "2024-06-20T08:17:02.124Z"
        },
        "mood": {
            "mood_log_id": "yourmoodlogid",
            "journal_id": "yourjournalid",
            "mood": "yourmood",
            "updatedAt": "2024-06-20T08:17:02.152Z",
            "createdAt": "2024-06-20T08:17:02.152Z"
        }
    }
}
```
##### `GET` Get Journal
- URL `https://moodify-r25es5rdqq-et.a.run.app/tool/journal`

- Response
```bash
{
        "journal": {
            "journal_id": "yourjournalid",
            "journal_title": "your journal title",
            "journal_text": "your description about your journal",
            "uid": "yourUID",
            "updatedAt": "2024-06-20T08:17:02.124Z",
            "createdAt": "2024-06-20T08:17:02.124Z"
        }
}
```
##### `PATCH` Edit Journal
- URL `https://moodify-r25es5rdqq-et.a.run.app/tool/journal`
- Request 
```bash
{
    "journal_title":"your journal title updated",
    "journal_text":"your description about your journal updated",
    "mood":"(automatically) your mood based on detected mood by machine learning"
}

```
- Response
```bash
{
    "message": "Journal updated successfully"
}
```
##### `GET` Get Today Journal
- URL `https://moodify-r25es5rdqq-et.a.run.app/tool/journal/today`

- Response
```bash
{
  {
        "journal": {
            "journal_id": "yourjournalid",
            "journal_title": "your journal title",
            "journal_text": "your description about your journal",
            "uid": "yourUID",
            "updatedAt": "2024-06-20T08:17:02.124Z",
            "createdAt": "2024-06-20T08:17:02.124Z"
        }
  }
}
```

### Mood
###### `GET` Get Today Mood
- URL `https://moodify-r25es5rdqq-et.a.run.app/tool/mood/today`

- Response
```bash
{
    "mood": [
        {
            "mood_log_id": "yourmoodlogid",
            "journal_id": "yourjournalid",
            "mood": "yourmood",
            "createdAt": "2024-06-20T08:17:02.000Z",
            "updatedAt": "2024-06-20T08:19:50.000Z"
        }
    ]
}
```
###### `GET` Get Weekly Mood
- URL `https://moodify-r25es5rdqq-et.a.run.app/tool/mood/week`

- Response
```bash
{
    "moodLogs": [
        {
            "mood_log_id": "yourmoodlogid",
            "journal_id": "yourjournalid",
            "mood": "yourmood",
            "createdAt": "2024-06-20T08:17:02.000Z",
            "updatedAt": "2024-06-20T08:19:50.000Z"
        }

                {
            "mood_log_id": "yourmoodlogid",
            "journal_id": "yourjournalid",
            "mood": "yourmood",
            "createdAt": "2024-06-20T08:17:02.000Z",
            "updatedAt": "2024-06-20T08:19:50.000Z"
        }

                {
            "mood_log_id": "yourmoodlogid",
            "journal_id": "yourjournalid",
            "mood": "yourmood",
            "createdAt": "2024-06-20T08:17:02.000Z",
            "updatedAt": "2024-06-20T08:19:50.000Z"
        }
    ]
}
```

### Coping Recommendation
###### `GET` Coping Recommendation based on detected mood
- URL `https://moodify-r25es5rdqq-et.a.run.app/coping/coping-recommendations`

- Response for example the detected mood is sadness
```bash
{
    "message": "Coping recommendations retrieved successfully",
    "recommendations": {
        "text_affirmation_first": "Not everybody will understand my situation, and it is okay.",
        "text_affirmation_last": "I deserve love, life, and happiness.",
        "text_instruction": "Box Breathing\r\n\r\nInstruction:\r\n1. Step One: Breathe in through the nose for a count of 4. \r\n2. Step Two: Hold breath for a count of 4. \r\n3. Step Three: Breath out for a count of 4. \r\n4. Step Four: Hold breath for a count of 4. \r\n5. Repeat 3 times",
        "urls": {
            "music": "https://storage.googleapis.com/moodify-bucket-capstone/mood/sadness/music/music_for_sadness.mp3",
            "podcast": "https://storage.googleapis.com/moodify-bucket-capstone/mood/sadness/podcast/podcast_for_sadness.mp3"
        }
    }
}
```
