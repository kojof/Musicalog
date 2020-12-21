using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheVirtualForge.Musicalog.Domain.Entities;


namespace TheVirtualForge.Musicalog.Application.DTOs
{
    public class AlbumDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Artist { get; set; }
        public string Label { get; set; }
        public int AlbumTypeId { get; set; }
        public int Stock { get; set; }
        public  AlbumType AlbumType { get; set; }
    }
}
