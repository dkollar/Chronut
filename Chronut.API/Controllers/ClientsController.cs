using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Chronut.API.Data;
using Chronut.API.Dtos;
using Chronut.API.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace Chronut.API.Controllers
{
    // http://localhost:5000/api/clients
    [Route("api/[controller]")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        private readonly IDatingRepository _repo;
        private readonly IMapper _mapper;
        public ClientsController(IDatingRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;

        }

        [HttpGet]
        public async Task<IActionResult> GetUsers([FromQuery]ClientParams clientParams)
        {
            var clients = await _repo.GetClients(clientParams);

            var clientsToReturn = _mapper.Map<IEnumerable<ClientForListDto>>(clients);

            Response.AddPagination(clients.CurrentPage, clients.PageSize,
                clients.TotalCount, clients.TotalPages);

            return Ok(clientsToReturn);
        }

    }
}