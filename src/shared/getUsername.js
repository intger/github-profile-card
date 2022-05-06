export const getUsername = async (user) => {
    let data;
    const response = await fetch('https://api.github.com/users/' + user);
    if (response.status === 200) {
        data = await response.json();
    } else {
        data = null;
    }

    return data;
}