export const formatarData = (data: string | Date) => {
    if (!data) return '-';
  
    // Se for uma string, cria um objeto Date
    const dataObj = typeof data === 'string' ? new Date(data) : data;
  
    // Ajuste do fuso horário para evitar o problema do dia anterior
    dataObj.setMinutes(dataObj.getMinutes() + dataObj.getTimezoneOffset());
  
    const dia = dataObj.getDate().toString().padStart(2, '0');
    const mes = (dataObj.getMonth() + 1).toString().padStart(2, '0');
    const ano = dataObj.getFullYear();
  
    return `${dia}/${mes}/${ano}`;
  };
  