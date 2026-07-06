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
                sh 'ls -la'git
    post {

        success {
            echo "Pipeline Success"
        }

        always {
            echo "Pipeline Finished"
        }

    }

}

stage('Docker Build'){
    steps{
        sh'docker build -t employee-app:v1 ./backend'
    }
}
 stage('Docker Compose'){
    steps{
        sh'docker-compose up -d'
    }
 }