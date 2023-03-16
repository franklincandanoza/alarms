package com.team.vinylos

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.team.vinylos.databinding.ActivityCreateAlarmBinding
import com.team.vinylos.databinding.ActivityEditAlarmBinding

class EditAlarmActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val binding = ActivityEditAlarmBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.acceptButton.setOnClickListener{
            val intent = Intent(this, SuccessfulMessageActivity::class.java)
            intent.putExtra("message", getString(R.string.alarmSuccessfulUpdateMessage))
            startActivity(intent)
        }
        binding.buttonAlarms.setOnClickListener{
            val intent = Intent(this, AlarmsActivity::class.java)
            startActivity(intent)

        }
    }
}