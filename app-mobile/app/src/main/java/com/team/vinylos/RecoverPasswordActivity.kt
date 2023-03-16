package com.team.vinylos

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.team.vinylos.databinding.ActivityCreateAlarmBinding
import com.team.vinylos.databinding.ActivityRecoverPasswordBinding

class RecoverPasswordActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val binding = ActivityRecoverPasswordBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.acceptButton.setOnClickListener{
            val intent = Intent(this, SuccessfulRegistrationActivity::class.java)
            intent.putExtra("message", getString(R.string.alarmSuccessfulEmailRecoveryMessage))
            startActivity(intent)
        }



    }
}