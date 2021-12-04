let apiUrl = "https://express-admins.herokuapp.com";

export const registration = `${apiUrl}/Reg`;
export const login = `${apiUrl}/Log`;
export const logout = `${apiUrl}/logout`;
export const updateUser = (id) => `${apiUrl}/UpdInf/${id}`;
export const loadUser = `${apiUrl}/list`;
export const restorePassword = `${apiUrl}/restore`;
export const updatePassword = (id) => `${apiUrl}/Edit/${id}`;
export const updateUserLesson = (userId) => `${apiUrl}/LessnUpd/${userId}`;
export const updateUserGrade = (userId) => `${apiUrl}/BallUpd/${userId}`;
export const getVideos = `${apiUrl}/vidInf`;
export const getTests = `${apiUrl}/AllTests`;
