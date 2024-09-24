
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import '../Style/Alert.css'; // Certifique-se de que o caminho para o CSS está correto

const showAlertWithCountdown = (title, text, countdownSeconds = 6) => {
  let remainingTime = countdownSeconds; // Tempo restante

  const timerInterval = setInterval(() => {
    remainingTime--;

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      Swal.close(); // Fecha o alerta quando o tempo expira

      // Exibe o segundo alerta com a mensagem
      Swal.fire({
        title: 'Mensagem Enviada',
        text: 'A mensagem foi enviada para o médico',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
    } else {
      const popup = Swal.getPopup();
      if (popup) {
        const strongElement = popup.querySelector('strong');
        if (strongElement) {
          strongElement.textContent = `${remainingTime} segundos restantes`;
        }
      }
    }
  }, 1000);

  Swal.fire({
    title: title,
    html: `<strong>${countdownSeconds} segundos restantes</strong><p>${text}</p>`,
    icon: 'warning',
    showConfirmButton: false,
    timer: countdownSeconds * 1000, // Tempo total em milissegundos
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
    },
    willClose: () => {
      clearInterval(timerInterval);
    }
  });
};

export default showAlertWithCountdown;
