package com.team.vinylos

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.team.vinylos.databinding.ActivitySuccessfulMessageBinding
import com.team.vinylos.databinding.ActivitySuccessfulRegistrationBinding

class SuccessfulRegistrationActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val binding = ActivitySuccessfulRegistrationBinding.inflate(layoutInflater)
        setContentView(binding.root)


        val intent = intent
        val text = intent.getStringExtra("message")
        binding.textView.text = text


        binding.acceptButton.setOnClickListener{
            startActivity(Intent(this, LoginActivity::class.java))
        }
    }
}