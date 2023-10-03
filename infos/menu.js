const menu = (prefixo, usu) => {
  return `
═══════════════════════════
🎉 Olá, Bem vindo(a) ao meu menu! 🎉
═══════════════════════════

🎵 Comando de baixar do youtube 🎵
🎼 ${prefixo}play <nome_da_música ou Link>
📺 ${prefixo}playmp4 <nome_do_vídeo ou Link>

📱 Comandos de Redes Sociais 📱
📸 ${prefixo}instagram <url_do_video>
🐦 ${prefixo}twitter <url_do_video>
📘 ${prefixo}facebook <url_do_video>
🕺 ${prefixo}tiktok <url_do_video>

Divirta-se com a música, vídeos e redes sociais! 🎶🎥💬

******************************

🛠️ Comando de Administradores 👨🏻‍💻
🚫 ${prefixo}ban (marque a mensagem do usuário)
🔑 ${prefixo}antilink (para ativar/desativar)

******************************

🎡 Diversões comandos/ações 🎢

Faço apenas figurinha em video
comando: ${prefixo}sticker 
Marque um video com o comando, que seja curto.

Ações de figurinha: 

adeus > Personagem dando xau.

mate geral > Personagem com metralhadora.

palmas > Personagem batendo palmas.

******************************

`
}

module.exports = {
menu
};