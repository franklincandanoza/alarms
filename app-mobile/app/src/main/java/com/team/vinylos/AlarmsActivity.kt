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
        binding.buttonCreateAlarm.setOnClickListener {
            val intent = Intent(this, CreateAlarmActivity::class.java)
            startActivity(intent)
        }
        binding.textView.setOnClickListener{
            val intent = Intent(this, EditAlarmActivity::class.java)
            startActivity(intent)
        }
        binding.textView1.setOnClickListener{
            val intent = Intent(this, EditAlarmActivity::class.java)
            startActivity(intent)
        }
        binding.logoutButton.setOnClickListener{
            val intent = Intent(this, LoginActivity::class.java)
            startActivity(intent)
        }
        binding.imageButton.setOnClickListener{
            val intent = Intent(this, ConfirmDeleteAlarmActivity::class.java)
            startActivity(intent)
        }
        binding.imageButton1.setOnClickListener{
            val intent = Intent(this, ConfirmDeleteAlarmActivity::class.java)
            startActivity(intent)
        }


    }
}