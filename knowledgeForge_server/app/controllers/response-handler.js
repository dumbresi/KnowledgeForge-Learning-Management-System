

export const setResponse = (data,response)=>{
    response.status(200).json(data);
};


export const setErrorResponse = (err,response)=>{
    response.status(500).json({
        code: err.code,
        message: "Error occured while processing your request."
    })
}
