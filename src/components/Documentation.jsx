import React, { useState } from 'react';
import { Copy, Check, ChevronRight, ExternalLink } from 'lucide-react';

const DocumentationSection = () => {
    const [copiedCode, setCopiedCode] = useState('');
    const [activeTab, setActiveTab] = useState('python');
  
   const endpoints = [
    {
      name: 'Authentication',
      description: 'Get API token for authentication',
      method: 'POST',
      endpoint: '/api/v1/auth/token',
      parameters: [
        { name: 'client_id', type: 'string', required: true, description: 'Your API client ID' },
        { name: 'client_secret', type: 'string', required: true, description: 'Your API client secret' }
      ],
      defaultPayload: {
        client_id: "your_client_id",
        client_secret: "your_client_secret"
      },
      response: {
        access_token: 'eyJhbGciOiJ...',
        token_type: 'Bearer',
        expires_in: 3600
      },
      examples: {
        python: `import requests

api_url = "https://api.example.com/v1/auth/token"
client_id = "your_client_id"
client_secret = "your_client_secret"

response = requests.post(
    api_url,
    json={
        "client_id": client_id,
        "client_secret": client_secret
    }
)

token = response.json()["access_token"]`,
        javascript: `const getToken = async () => {
  const response = await fetch('https://api.example.com/v1/auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: 'your_client_id',
      client_secret: 'your_client_secret'
    })
  });
  
  const data = await response.json();
  return data.access_token;
}`,
        go: `package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
)

func getToken() (string, error) {
    payload := map[string]string{
        "client_id":     "your_client_id",
        "client_secret": "your_client_secret",
    }
    
    jsonData, err := json.Marshal(payload)
    if err != nil {
        return "", err
    }
    
    resp, err := http.Post(
        "https://api.example.com/v1/auth/token",
        "application/json",
        bytes.NewBuffer(jsonData),
    )
    if err != nil {
        return "", err
    }
    defer resp.Body.Close()
    
    var result map[string]interface{}
    if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
        return "", err
    }
    
    return result["access_token"].(string), nil
}`,
        ruby: `require 'net/http'
require 'json'

uri = URI('https://api.example.com/v1/auth/token')
payload = {
  client_id: 'your_client_id',
  client_secret: 'your_client_secret'
}

http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true

request = Net::HTTP::Post.new(uri)
request['Content-Type'] = 'application/json'
request.body = payload.to_json

response = http.request(request)
token = JSON.parse(response.body)['access_token']`,
        java: `import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;

public class ApiClient {
    public String getToken() throws Exception {
        var client = HttpClient.newHttpClient();
        
        String payload = """
            {
                "client_id": "your_client_id",
                "client_secret": "your_client_secret"
            }
            """;
            
        var request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.example.com/v1/auth/token"))
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(payload))
            .build();
            
        var response = client.send(request, 
            HttpResponse.BodyHandlers.ofString());
            
        // Using Jackson or Gson to parse JSON
        ObjectMapper mapper = new ObjectMapper();
        JsonNode root = mapper.readTree(response.body());
        return root.get("access_token").asText();
    }
}`,
        csharp: `using System.Net.Http;
using System.Text.Json;

public async Task<string> GetToken()
{
    using var client = new HttpClient();
    
    var payload = new
    {
        client_id = "your_client_id",
        client_secret = "your_client_secret"
    };
    
    var content = new StringContent(
        JsonSerializer.Serialize(payload),
        Encoding.UTF8,
        "application/json"
    );
    
    var response = await client.PostAsync(
        "https://api.example.com/v1/auth/token",
        content
    );
    
    var result = await response.Content
        .ReadFromJsonAsync<TokenResponse>();
        
    return result.AccessToken;
}`,
        php: `<?php

$client = new GuzzleHttp\Client();

$response = $client->post('https://api.example.com/v1/auth/token', [
    'json' => [
        'client_id' => 'your_client_id',
        'client_secret' => 'your_client_secret'
    ]
]);

$data = json_decode($response->getBody(), true);
$token = $data['access_token'];`,
        rust: `use reqwest;
use serde_json::json;

async fn get_token() -> Result<String, Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();
    
    let response = client
        .post("https://api.example.com/v1/auth/token")
        .json(&json!({
            "client_id": "your_client_id",
            "client_secret": "your_client_secret"
        }))
        .send()
        .await?;
    
    let data: serde_json::Value = response.json().await?;
    Ok(data["access_token"].as_str().unwrap().to_string())
}`,
        curl: `curl -X POST https://api.example.com/v1/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{
    "client_id": "your_client_id",
    "client_secret": "your_client_secret"
  }'`
      }
    }
  ];

  const copyToClipboard = async (code, language) => {
    await navigator.clipboard.writeText(code);
    setCopiedCode(language);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 py-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            API Documentation
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Welcome to our comprehensive API documentation. Use these endpoints to integrate our services into your applications.
          </p>
        </div>

        {/* Version Badge */}
        <div className="flex justify-center">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            API Version: v1
          </span>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {endpoints.map((endpoint) => (
            <div key={endpoint.name} className="w-full rounded-xl border border-gray-200 shadow-lg bg-white/50 backdrop-blur-sm overflow-hidden">
              {/* Card Header */}
              <div className="border-b border-gray-100 p-6">
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                    endpoint.method === 'GET' ? 'bg-blue-100 text-blue-800' :
                    endpoint.method === 'POST' ? 'bg-green-100 text-green-800' :
                    endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {endpoint.method}
                  </span>
                  <code className="text-sm bg-gray-100 px-4 py-1 rounded-full font-mono">
                    {endpoint.endpoint}
                  </code>
                </div>
                <h2 className="text-2xl font-bold mt-4">{endpoint.name}</h2>
                <p className="text-gray-600">{endpoint.description}</p>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-8">
                {/* Parameters */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Parameters</h3>
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="divide-y divide-gray-100">
                      {endpoint.parameters.map((param, idx) => (
                        <div 
                          key={param.name}
                          className={`flex items-start p-4 hover:bg-gray-50 transition-colors
                            ${idx % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}`}
                        >
                          <div className="min-w-[160px]">
                            <code className="text-sm font-mono text-purple-600">
                              {param.name}
                            </code>
                            {param.required && (
                              <span className="text-red-500 text-xs ml-1">*</span>
                            )}
                          </div>
                          <div className="flex-1">
                            <span className="text-sm text-gray-700">{param.description}</span>
                            <span className="text-xs text-gray-500 ml-2 px-2 py-1 bg-gray-100 rounded-full">
                              {param.type}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Response */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Response</h3>
                  <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto">
                    <code className="text-sm">
                      {JSON.stringify(endpoint.response, null, 2)}
                    </code>
                  </pre>
                </div>

                {/* Code Examples */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Code Examples</h3>
                  
                  {/* Custom Tabs */}
                  <div className="border-b border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      {Object.keys(endpoint.examples).map((lang) => (
                        <button
                          key={lang}
                          onClick={() => setActiveTab(lang)}
                          className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors
                            ${activeTab === lang 
                              ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' 
                              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
                        >
                          {lang.charAt(0).toUpperCase() + lang.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tab Content */}
                  <div className="mt-4">
                    {Object.entries(endpoint.examples).map(([lang, code]) => (
                      <div
                        key={lang}
                        className={`relative ${activeTab === lang ? 'block' : 'hidden'}`}
                      >
                        <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto">
                          <code className="text-sm font-mono">{code}</code>
                        </pre>
                        <button
                          onClick={() => copyToClipboard(code, lang)}
                          className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                        >
                          {copiedCode === lang ? (
                            <Check className="w-5 h-5 text-green-400" />
                          ) : (
                            <Copy className="w-5 h-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default DocumentationSection;