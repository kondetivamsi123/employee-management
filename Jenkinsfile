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
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t $IMAGE_NAME ./backend'
            }
        }

        stage('ACR Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'acr',
                    usernameVariable: 'ACR_USER',
                    passwordVariable: 'ACR_PASS'
                )]) {

                    sh '''
                    echo $ACR_PASS | docker login vamsiar001.azurecr.io \
                    -u $ACR_USER \
                    --password-stdin
                    '''
                }
            }
        }

        stage('Docker Push') {
            steps {
                sh 'docker push $IMAGE_NAME'
            }
        }

        stage('Deploy Kubernetes') {
            steps {
                sh '''
                kubectl apply -f kubernetes/namespace.yaml
                kubectl apply -f kubernetes/deployment.yaml
                kubectl apply -f kubernetes/service.yaml
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