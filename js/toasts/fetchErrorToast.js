function showToast( ) {
  const toast = document.createElement('div');
  toast.textContent = 'Не удалось получить данные';
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#fff',
    color: '#000',
    padding: '12px 20px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    fontSize: '14px',
    zIndex: '100',
    maxWidth: '90%',
    textAlign: 'center'
  });

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

export { showToast };
