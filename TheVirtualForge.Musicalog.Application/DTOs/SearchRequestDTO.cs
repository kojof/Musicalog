using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheVirtualForge.Musicalog.Application.DTOs
{
    public class SearchRequestDTO
    {
        public int PageSize { get; set; }
        public int PageNumber { get; set; }

        public string SortBy { get; set; }

        public bool SortOrder { get; set; }
    }
}
