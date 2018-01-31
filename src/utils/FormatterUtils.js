export const floatToReal = floatNumber => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    }).format(floatNumber)
}
export const floatToRealTwo = float => {
    return float
}

export const realToFloat = stringReal => {
    const float = parseFloat(
        stringReal
            .replace(/[|R|$]/g, '')
            .replace(/\./g, '')
            .replace(/,/g, '.')
            .replace(/ /g, '')
    )
    return float !== 'NaN' ? float : 0
}