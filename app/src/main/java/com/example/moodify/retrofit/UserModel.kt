package com.example.moodify.retrofit

data class UserModel(
    val email: String,
    val token: String,
    val isLogin: Boolean = false
)
