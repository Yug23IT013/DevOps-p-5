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
        // Stop and remove the old container if it exists. 
        // "|| true" prevents the build from failing if the container isn't there.
        sh 'docker stop nodejs-app-container || true'
        sh 'docker rm nodejs-app-container || true'

        // Run the new container from the newly built image
        sh 'docker run -d --name nodejs-app-container -p 3000:3000 nodejs-app:latest'
    }
}
    }
}
