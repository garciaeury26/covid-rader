

export const getCovidDates = async (a, b) => {

    const url = ('https://www.trackcorona.live/api/cities')

    try {

        const res = await fetch(url)
        const { data } = await res.json()



        return data.slice(a, b)

    } catch (error) {
        console.log(error, 'error en el servidor')
    }


}
