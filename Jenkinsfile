pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                // Clones the repository code
                git branch: 'main', url: 'http://github.com/Yug23IT013/DevOps-p-5'
            }
        }
        stage('Build Docker Image') {
            steps {
                // Build the Docker image and tag it
                sh 'docker build -t nodejs-app:latest .'
            }
        }
        stage('Deploy Application') {
            steps {
                script {
                    // Check if a container with the same name is running and stop/remove it
                    def containerId = sh(script: 'docker ps -q --filter "name=nodejs-app-container"', returnStatus: true)
                    if (containerId == 0) {
                        sh 'docker stop nodejs-app-container'
                        sh 'docker rm nodejs-app-container'
                    }
                    // Run the new container
                    sh 'docker run -d --name nodejs-app-container -p 3000:3000 nodejs-app:latest'
                }
            }
        }
    }
}
