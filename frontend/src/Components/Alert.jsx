//BIBLIOTECA
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

//ESTILIZAÇÃO
import '../Style/Alert.css';

const showAlertWithCountdown = (title, text, countdownSeconds = 6) => {
  let remainingTime = countdownSeconds;

  const timerInterval = setInterval(() => {
    remainingTime--;

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      Swal.close();

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
    timer: countdownSeconds * 1000,
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