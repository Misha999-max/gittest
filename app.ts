const objectPrice = {
	price: 100000,
	discount: 25,
	isInstallment: true,
	months: 12,
}
function totalPrice(obj: {
	price: number
	discount: number
	months: number
}): number {
	let objDiscount = obj.price * (obj.discount / 100)
	let yuoPrice = (obj.price - objDiscount) / obj.months
	return yuoPrice
}

const price = totalPrice(objectPrice)
console.log(price)
