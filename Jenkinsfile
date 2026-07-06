pipeline {
    agent any

    stages {

        stage('Linux') {
            steps {
                sh 'pwd'
                sh 'ls -la'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t employee-app:v1 ./backend'
            }
        }

        stage('Docker Compose') {
            steps {
                sh 'docker compose up -d'
            }
        }

    }

    post {
        success {
            echo 'Pipeline Success'
        }

        always {
            echo 'Pipeline Finished'
        }
    }
}