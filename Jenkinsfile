pipeline {

    agent any

    environment {
        APP = "Enterprise DevOps"
    }

    stages {

        stage('Welcome') {
            steps {
                echo "Welcome ${APP}"
            }
        }

        stage('Linux') {
            steps {
                sh 'pwd'
                sh 'ls -la'
            }
        }

    }

    post {

        success {
            echo "Pipeline Success"
        }

        always {
            echo "Pipeline Finished"
        }

    }

}