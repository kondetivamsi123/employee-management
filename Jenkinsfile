pipeline {
    agent any

    environment {
        IMAGE_NAME = "vamsiar001.azurecr.io/employee-app:v1"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('List Files') {
            steps {
                sh 'pwd'
                sh 'ls -la'
                sh 'which docker'
                sh 'docker --version'
            }
        }

        stage('Docker Build') {
            steps {
                sh '''
                /usr/bin/docker build -t $IMAGE_NAME ./backend
                '''
            }
        }

        stage('ACR Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'acr-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                    echo "$DOCKER_PASS" | /usr/bin/docker login vamsiar001.azurecr.io -u "$DOCKER_USER" --password-stdin
                    '''
                }
            }
        }

        stage('Docker Push') {
            steps {
                sh '''
                /usr/bin/docker push $IMAGE_NAME
                '''
            }
        }

        stage('Deploy Kubernetes') {
            steps {
                sh '''
                kubectl apply -f kubernetes/
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline Finished Successfully'
        }
        failure {
            echo 'Pipeline Failed'
        }
        always {
            echo 'Pipeline Finished'
        }
    }
}