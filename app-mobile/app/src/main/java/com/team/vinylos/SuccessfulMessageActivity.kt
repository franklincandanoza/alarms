package com.team.vinylos

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.team.vinylos.databinding.ActivityLoginBinding
import com.team.vinylos.databinding.ActivitySuccessfulMessageBinding


class SuccessfulMessageActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val binding = ActivitySuccessfulMessageBinding.inflate(layoutInflater)
        setContentView(binding.root)


        val intent = intent
        val text = intent.getStringExtra("message")
        binding.textView.text = text


        binding.acceptButton.setOnClickListener{
            startActivity(Intent(this, AlarmsActivity::class.java))
        }
    }
}