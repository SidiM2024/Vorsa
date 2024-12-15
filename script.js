function sendToWhatsApp(type) {
    const description = document.getElementById('description').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const whatsappNumber = "22230647036"; // أضف رقم واتساب الخاص بك مع رمز الدولة
  
    if (description && phone) {
      const messageType = type === 'job' ? 'طلب عمل' : 'طلب عامل';
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`${messageType}:\n${description}\nرقم الهاتف: ${phone}`)}`;
      window.open(whatsappLink, '_blank');
    } else {
      alert("يرجى ملء جميع الحقول.");
    }
  }
  