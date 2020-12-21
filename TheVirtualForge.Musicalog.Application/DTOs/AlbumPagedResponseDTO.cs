using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace TheVirtualForge.Musicalog.Application.DTOs
{
    public class AlbumPagedResponseDTO
    {
        public IEnumerable<AlbumDTO> Albums { get; set; }
        public int TotalCount { get; set; }
    }
}
