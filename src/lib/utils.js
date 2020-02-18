module.exports = {
    age: function(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if(month < 0 || month == 0 && today.getDate() < birthDate.getDate())
            age -= 1

        return age
    },
    graduation: function(scholarity) {
        if(scholarity == "medio")
            return "Ensino Médio Completo"
        else if(scholarity == "superior")
            return "Ensino Superior Completo"
        else if(scholarity == "mestrado")
            return "Mestrado"
        else
            return "Doutorado"
    },
    date: function(timestamp) {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()

        const month = `0${date.getUTCMonth() + 1}`.slice(-2)

        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            day,
            month,
            year,
            birthDay: `${day}/${month}`,
            iso: `${year}-${month}-${day}`,
            format: `${day}/${month}/${year}`
        }
    },
    grade: function(academic_year) {
        if(academic_year == "5f")
            return "5º Ano do Ensino Fundamental"
        else if(academic_year == "6f")
            return "6º Ano do Ensino Fundamental"
        else if(academic_year == "7f")
            return "7º Ano do Ensino Fundamental"
        else if(academic_year == "8f")
            return "8º Ano do Ensino Fundamental"
        else if(academic_year == "9f")
            return "9º Ano do Ensino Fundamental"
        else if(academic_year == "1m")
            return "1º Ano do Ensino Médio"
        else if(academic_year == "2m")
            return "2º Ano do Ensino Médio"
        else if(academic_year == "3m")
            return "3º Ano do Ensino Médio"
    }
}