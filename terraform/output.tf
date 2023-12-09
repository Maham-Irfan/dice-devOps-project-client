output "public_ip" {
  value = aws_instance.nextjs-client.public_ip
}

output "private_pem" {
  value = tls_private_key.key.private_key_pem
  sensitive = true
}