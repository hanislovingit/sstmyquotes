using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyQuotes.Services.Interfaces;

namespace MyQuotes.Services
{
    public class Operation: IOperationTransient, 
        IOperationScoped, IOperationSingleton, IOperationSingletonInstance
    {
        public Guid OperationId { get; }

        public Operation(Guid operationId)
        {
            OperationId = operationId;
        }
    }
}
