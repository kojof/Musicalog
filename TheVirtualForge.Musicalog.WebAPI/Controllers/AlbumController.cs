using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using TheVirtualForge.Musicalog.Application.DTOs;
using TheVirtualForge.Musicalog.Application.Interfaces.Services;
using TheVirtualForge.Musicalog.Domain.Entities;

namespace TheVirtualForge.Musicalog.WebAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class AlbumController : ApiController
    {
        private readonly IAlbumService _albumService;
        private readonly IMapper _mapper;

        public AlbumController(IAlbumService albumService, IMapper mapper)
        {
            _albumService = albumService;
            _mapper = mapper;
        }


        /// <summary>
        /// Search By Criteria
        /// </summary>
        /// <param name="searchRequestDTO"></param>
        /// <returns></returns>
        // GET: api/Album/search
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("Search")]
        public async Task<IHttpActionResult> Search([FromBody]SearchRequestDTO searchRequestDTO)
        {
            if (searchRequestDTO != null)
            {
                try
                {
                    var albums = await _albumService.GetPagedReponseAsync(searchRequestDTO.PageNumber, searchRequestDTO.PageSize, searchRequestDTO.SortBy, searchRequestDTO.SortOrder);

                  

                    var albumsDTO = _mapper.Map<AlbumPagedResponse, AlbumPagedResponseDTO>(albums);
                    return Ok(albumsDTO);

                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex);
                }
            }

            return NotFound();
        }

        /// <summary>
        /// Get all  Albums
        /// </summary>
        /// <returns></returns>
        // GET: api/Album/getall
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("GetAll")]
        public async Task<IHttpActionResult> GetAll()
        {
            try
            {
                var albums = await _albumService.GetAllAsync();

                var albumsDTO = _mapper.Map<IEnumerable<Album>, IEnumerable<AlbumDTO>>(albums);
                return Ok(albumsDTO);

            }

            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }

            return NotFound();
        }

        /// <summary>
        /// Delete By Id
        /// </summary>
        /// <returns></returns>
        // DELETE: api/Album/5
        [System.Web.Http.HttpDelete]
        [System.Web.Http.Route("Delete")]
        public async Task<IHttpActionResult> Delete(int id)
        {

            try
            {
                await _albumService.DeleteAsync(id);

                return Ok();

            }

            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }

            return NotFound();
        }

        /// <summary>
        /// Add Album
        /// </summary>
        /// <returns></returns>
        // POST: api/Album/
        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("Add")]
        public async Task<IHttpActionResult> Add([FromBody] AlbumDTO albumDTO)
        {
            try
            {
                var album = _mapper.Map<AlbumDTO, Album>(albumDTO);
                await _albumService.AddAsync(album);
                return Ok();
            }

            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }

            return NotFound();
        }


        /// <summary>
        /// Edit Album
        /// </summary>
        /// <returns></returns>
        // POST: api/Album/
        [System.Web.Http.HttpPut]
        [System.Web.Http.Route("Edit")]
        public async Task<IHttpActionResult> Edit([FromBody] AlbumDTO albumDTO)
        {
            try
            {
                var album = _mapper.Map<AlbumDTO, Album>(albumDTO);
                await _albumService.EditAsync(album);
                return Ok();
            }

            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }

            return NotFound();
        }

        /// <summary>
        /// Get Album by Id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        // GET: api/Album/5
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("GetById")]
        public async Task<AlbumDTO> GetById(int id)
        {
            var album = await _albumService.GetById(id);
            var albumsDTO = _mapper.Map<Album, AlbumDTO>(album);
            return albumsDTO;
        }


    }
}
