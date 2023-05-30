var Plantas = require('../models/plantas')

// Plantas list
module.exports.list = () =>{
    return Plantas.find()
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.interface = () =>{
    return Plantas.find({},{"_id":1,"Id":1,"Freguesia":1,"Espécie":1,"Estado":1,"Número de Intervenções":1})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.contador = () =>{
    return Plantas.count()
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.getPlanta = id =>{
    return Plantas.findOne({"Id":id})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.getespecie = especie =>{
    return Plantas.find({Espécie: especie})
            .then(dados =>{
                return dados
            })
            .catch(erro =>{
                return erro
            })
}

module.exports.getimplantacao = implantacao =>{
    return Plantas.find({Implantação: implantacao})
            .then(dados =>{
                return dados
            })
            .catch(erro =>{
                return erro
            })
}

module.exports.getfreguesias = () =>{
    return Plantas.distinct("Freguesia")
            .then(dados =>{
                return dados
            })
            .catch(erro =>{
                return erro
            })
}

module.exports.getespecieslist = () =>{
    return Plantas.distinct("Espécie")
            .then(dados =>{
                return dados
            })
            .catch(erro =>{
                return erro
            })
}

module.exports.addPlantas = (Plantas) => {
    return Plantas.collection.insertOne(plantas)
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
  }

module.exports.editPlantas = (id,plantas)=>{
    return Plantas.updateOne({_id:id},plantas)
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.deletePlantas = id =>{
    return Plantas.deleteOne({_id:id})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}
