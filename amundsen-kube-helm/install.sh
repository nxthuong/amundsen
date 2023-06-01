#!/usr/bin/bash

set -e

# GCP - Container Registry setup
gcloud auth login
gcloud config set project baemin-vietnam
gcloud auth configure-docker gcr.io

# Build Docker images
docker build -f Dockerfile.frontend.public -t gcr.io/baemin-vietnam/amundsen-frontend:dev .
docker push gcr.io/baemin-vietnam/amundsen-frontend:dev

docker build -f Dockerfile.metadata.public -t gcr.io/baemin-vietnam/amundsen-metadata:dev .
docker push gcr.io/baemin-vietnam/amundsen-metadata:dev

docker build -f Dockerfile.search.public -t gcr.io/baemin-vietnam/amundsen-search:dev .
docker push gcr.io/baemin-vietnam/amundsen-search:dev

# GCP - K8s cluster
gcloud container clusters get-credentials data-service-nat --zone asia-southeast1-a --project baemin-vietnam
kubectl create namespace amundsen

# Helm chart
cd ./amundsen-kube-helm
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo add neo4j https://helm.neo4j.com/neo4j
helm repo update
helm dependency build ./templates/helm/

helm install --generate-name --dry-run --debug ./templates/helm/
helm install my-amundsen ./templates/helm/ --namespace amundsen
