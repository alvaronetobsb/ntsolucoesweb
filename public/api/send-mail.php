<?php
require_once '../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido']);
    exit;
}

try {
    $data = json_decode(file_get_contents('php://input'), true);

    if (!$data) {
        throw new Exception('Dados inválidos');
    }

    $nome = $data['nome'] ?? '';
    $email = $data['email'] ?? '';
    $telefone = $data['telefone'] ?? '';
    $servico = $data['servico'] ?? '';
    $mensagem = $data['mensagem'] ?? '';

    if (!$nome || !$email || !$telefone || !$servico || !$mensagem) {
        throw new Exception('Todos os campos são obrigatórios');
    }

    $mail = new PHPMailer(true);

    // Configurações do servidor
    $mail->isSMTP();
    $mail->Host = 'email-ssl.com.br';
    $mail->SMTPAuth = true;
    $mail->Username = 'contato@ntsolucoesweb.com';
    $mail->Password = 's,G,5,[>|l0e)';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;
    $mail->CharSet = 'UTF-8';

    // Remetente e destinatário
    $mail->setFrom('contato@ntsolucoesweb.com', 'Site NT Soluções Web');
    $mail->addAddress('contato@ntsolucoesweb.com', 'NT Soluções Web');
    $mail->addReplyTo($email, $nome);

    // Conteúdo do email
    $mail->isHTML(true);
    $mail->Subject = "Novo contato do site - {$servico}";
    
    // Corpo do email em HTML
    $mail->Body = "
        <h2>Novo contato recebido pelo site</h2>
        <p><strong>Nome:</strong> {$nome}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Telefone:</strong> {$telefone}</p>
        <p><strong>Serviço:</strong> {$servico}</p>
        <p><strong>Mensagem:</strong></p>
        <p>{$mensagem}</p>
    ";

    // Versão em texto plano
    $mail->AltBody = "
        Novo contato recebido pelo site\n\n
        Nome: {$nome}\n
        Email: {$email}\n
        Telefone: {$telefone}\n
        Serviço: {$servico}\n
        Mensagem:\n{$mensagem}
    ";

    $mail->send();
    echo json_encode([
        'success' => true,
        'message' => 'Mensagem enviada com sucesso!'
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Erro ao enviar e-mail: ' . $e->getMessage()]);
} 