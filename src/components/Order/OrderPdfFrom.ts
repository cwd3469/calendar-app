const OrderPdfFrom = (contents:undefined):any =>{
  const CalculateForm:any = {
    content:contents,
    styles: {
      header: {
        fontSize: 18,
        bold: true,
      },
      subheader: {
        fontSize: 15,
        bold: true,
      },
      quote: {
        italics: true,
      },
      small: {
        fontSize: 8,
      },
    },
  }

  return CalculateForm
}

export default OrderPdfFrom
