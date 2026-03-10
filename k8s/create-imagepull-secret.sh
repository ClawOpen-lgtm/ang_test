#!/usr/bin/env bash
# Create a Docker registry secret for GHCR in the ai-workloads namespace.
# Requirements: kubectl configured with access to the cluster, and GITHUB_TOKEN env var set.

set -euo pipefail

TOKEN="${GITHUB_TOKEN:-}"
if [[ -z "$TOKEN" ]]; then
  echo "Error: GITHUB_TOKEN environment variable is required."
  echo "Get a token with 'read:packages' scope from https://github.com/settings/tokens"
  exit 1
fi

NAMESPACE="${1:-ai-workloads}"
SECRET_NAME="${2:-ghcr-secret}"

# Create the namespace if it doesn't exist
kubectl create namespace "$NAMESPACE" --dry-run=client -o yaml | kubectl apply -f -

# Delete existing secret if present
kubectl delete secret "$SECRET_NAME" -n "$NAMESPACE" --ignore-not-found

# Create the secret using kubectl create docker-registry
kubectl create secret docker-registry "$SECRET_NAME" \
  --namespace="$NAMESPACE" \
  --docker-server=ghcr.io \
  --docker-username=ClawOpen-lgtm \
  --docker-password="$TOKEN" \
  --dry-run=client -o yaml | kubectl apply -f -

echo "Secret $SECRET_NAME created in namespace $NAMESPACE."
echo "To deploy the application:"
echo "  kubectl apply -f k8s/"
