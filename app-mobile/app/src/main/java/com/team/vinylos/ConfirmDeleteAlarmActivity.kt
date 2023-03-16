package com.team.vinylos

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.team.vinylos.databinding.ActivityConfirmDeleteAlarmBinding
import com.team.vinylos.databinding.ActivityCreateAlarmBinding

class ConfirmDeleteAlarmActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val binding = ActivityConfirmDeleteAlarmBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.acceptButton.setOnClickListener{
            val intent = Intent(this, SuccessfulMessageActivity::class.java)
            intent.putExtra("message", getString(R.string.alarmSuccessfulDeleteMessage))
            startActivity(intent)
        }
        binding.cancelButton.setOnClickListener{
            val intent = Intent(this, AlarmsActivity::class.java)
            startActivity(intent)
        }
    }
}