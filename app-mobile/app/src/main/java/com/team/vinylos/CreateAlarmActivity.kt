package com.team.vinylos

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.team.vinylos.databinding.ActivityAlarmsBinding
import com.team.vinylos.databinding.ActivityCreateAlarmBinding

class CreateAlarmActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val binding = ActivityCreateAlarmBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.acceptButton.setOnClickListener{
            val intent = Intent(this, SuccessfulMessageActivity::class.java)
            intent.putExtra("message", getString(R.string.alarmSuccessfulCreationMessage))
            startActivity(intent)
        }
        binding.buttonAlarms.setOnClickListener{
            val intent = Intent(this, AlarmsActivity::class.java)
            startActivity(intent)

        }


    }
}