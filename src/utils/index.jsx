import Swal from 'sweetalert2'

export const SwalFire = (title, text, icon) => Swal.fire({
    title,
    text,
    icon
})

export const handleChange = (e) => {
    const { name, value} = e?.target
    let dataValues = {}
    dataValues[name] = value
    return dataValues
}