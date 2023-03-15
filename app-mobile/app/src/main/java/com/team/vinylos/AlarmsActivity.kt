package com.team.vinylos

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.team.vinylos.R
import com.team.vinylos.databinding.ActivityAlarmsBinding
import com.team.vinylos.databinding.ActivityWelcomeBinding

class AlarmsActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val binding = ActivityAlarmsBinding.inflate(layoutInflater)
        setContentView(binding.root)
        binding.buttonAlarms.setOnClickListener {
            val intent = Intent(this, AlarmsActivity::class.java)
            startActivity(intent)
        }
    }
}