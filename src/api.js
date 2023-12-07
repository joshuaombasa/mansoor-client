export async function loginVendor(formData) {
    const res = await fetch(`http://localhost:3000/api/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    const data = await res.json()
    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}

export async function getAllEquipment() {
    const res = await  fetch("http://localhost:3000/api/equipment")
    const data = await res.json() 
    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }
    return data
}

export async function getSelectedEquipment(id) {
    const res = await fetch(`http://localhost:3000/api/equipment/${id}`)
    const data = await res.json() 
    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }
    return data
}

 export async function getVendorEquipment() {
    const res = await fetch("http://localhost:3000/api/vendor/equipment")
    const data = await res.json()
    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }
    return data
}

export async function getVendorIncome() {
    const res = await fetch("http://localhost:3000/api/vendor/income")
    const data = await res.json()
    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }
    return data
}

export async function getVendorTransactions() {
    const res = await fetch("http://localhost:3000/api/vendor/transactions")
    const data = await res.json()
    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }
    return data
}

export async function getVendorReviews() {
    const res = await fetch("http://localhost:3000/api/vendor/reviews")
    const data = await res.json()
    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }
    return data
}
