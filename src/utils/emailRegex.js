export const emailRegex = (email) => {
    let status
    const regex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    if (regex.test(email)) {
        status = true
    } else {
        status = false
    }
    return status
}
