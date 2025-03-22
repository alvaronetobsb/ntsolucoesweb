<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

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
    $servico = $data['servico'] ?? '';
    $mensagem = $data['mensagem'] ?? '';

    if (!$nome || !$email || !$servico || !$mensagem) {
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
    $mail->setFrom('contato@ntsolucoesweb.com', 'NT Soluções Web');
    $mail->addAddress('contato@ntsolucoesweb.com', 'NT Soluções Web');
    $mail->addReplyTo($email, $nome);

    // Conteúdo
    $mail->isHTML(true);
    $mail->Subject = "Novo contato do site - {$servico}";
    
    $mailContent = "
    <h2>Novo contato recebido do site</h2>
    <p><strong>Nome:</strong> {$nome}</p>
    <p><strong>E-mail:</strong> {$email}</p>
    <p><strong>Serviço:</strong> {$servico}</p>
    <p><strong>Mensagem:</strong></p>
    <p>{$mensagem}</p>
    ";

    $mail->Body = $mailContent;
    $mail->AltBody = strip_tags(str_replace(['<br>', '</p>'], "\n", $mailContent));

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'E-mail enviado com sucesso!']);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Erro ao enviar e-mail: ' . $e->getMessage()]);
} 