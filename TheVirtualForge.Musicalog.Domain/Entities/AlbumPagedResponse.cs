using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheVirtualForge.Musicalog.Domain.Entities
{
    public class AlbumPagedResponse
    {
        public IEnumerable<Album> Albums { get; set; }
        public int TotalCount { get; set; }
    }
}
